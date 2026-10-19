import "../chunks/chunk-X5G4UXXD.js";

// src/scripts/Liguid-glass-webgl.ts
var DEFAULTS = { grid: 50, mouse: 0.25, strength: 0.11, relaxation: 0.9 };
var INITIAL_NOISE = false;
var GRAYSCALE_UNTIL_HOVER = true;
var SNAP_TO_PIXELS = false;
var USE_MIPMAPS = false;
var USE_LENIS = false;
var LENIS_SRC = "https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.19/bundled/lenis.min.js";
function clamp(n, min, max) {
  return Math.max(min, Math.min(n, max));
}
function relaxData(data, relaxation) {
  let maxAbs = 0;
  for (let i = 0; i < data.length; i += 4) {
    const x = data[i] *= relaxation;
    const y = data[i + 1] *= relaxation;
    const ax = x < 0 ? -x : x;
    const ay = y < 0 ? -y : y;
    if (ax > maxAbs) maxAbs = ax;
    if (ay > maxAbs) maxAbs = ay;
  }
  return maxAbs;
}
function applyMouseForce(data, size, mouseX, mouseY, vX, vY, radius, strength, aspect) {
  const gridMouseX = size * mouseX;
  const gridMouseY = size * (1 - mouseY);
  const maxDist = size * radius;
  if (!(maxDist > 0) || !(aspect > 0)) return;
  const maxDistSq = maxDist ** 2;
  const rx = maxDist * Math.sqrt(aspect);
  const iMin = Math.max(0, Math.floor(gridMouseX - rx));
  const iMax = Math.min(size - 1, Math.ceil(gridMouseX + rx));
  const jMin = Math.max(0, Math.floor(gridMouseY - maxDist));
  const jMax = Math.min(size - 1, Math.ceil(gridMouseY + maxDist));
  for (let i = iMin; i <= iMax; i++) {
    for (let j = jMin; j <= jMax; j++) {
      const distance = (gridMouseX - i) ** 2 / aspect + (gridMouseY - j) ** 2;
      if (distance < maxDistSq) {
        const index = 4 * (i + size * j);
        const power = clamp(maxDist / Math.sqrt(distance), 0, 10);
        data[index] += strength * 100 * vX * power;
        data[index + 1] -= strength * 100 * vY * power;
      }
    }
  }
}
function onReady(fn) {
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
  else fn();
}
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Failed to load " + src));
    document.head.appendChild(s);
  });
}
function showElement(el) {
  el.style.setProperty("opacity", "1", "important");
  el.style.setProperty("visibility", "visible", "important");
}
function showPlainImages() {
  if (document.getElementById("liquid-gl-fallback")) return;
  const s = document.createElement("style");
  s.id = "liquid-gl-fallback";
  s.textContent = ".liquid-img,.project-image,.liquid-container video{opacity:1!important;visibility:visible!important}#gl-canvas{display:none!important}";
  document.head.appendChild(s);
}
function readNumber(el, key, fallback) {
  return parseFloat(el.dataset[key] ?? "") || fallback;
}
function main() {
  if (window.__liquidWebGL) return;
  window.__liquidWebGL = true;
  const isMobile = window.matchMedia("(max-width: 991px)").matches || window.innerWidth <= 991;
  onReady(() => {
    if (isMobile) {
      document.querySelectorAll(".liquid-container[data-lazy] img").forEach((img) => {
        img.loading = "lazy";
        if (img.dataset.src) img.src = img.dataset.src;
      });
      return;
    }
    const lenisLoad = USE_LENIS && typeof window.Lenis === "undefined" ? loadScript(LENIS_SRC).catch(
      () => console.warn("[liquid-webgl] Lenis sa nena\u010D\xEDtal, pokra\u010Dujem bez neho.")
    ) : Promise.resolve();
    Promise.all([import("../chunks/three.module-DVBJBQ5U.js"), lenisLoad]).then(([THREE]) => start(THREE)).catch((err) => {
      console.warn("[liquid-webgl] Inicializ\xE1cia zlyhala, zobrazujem oby\u010Dajn\xE9 obr\xE1zky:", err);
      showPlainImages();
    });
  });
}
function start(THREE) {
  let lenis = null;
  if (USE_LENIS && typeof window.Lenis !== "undefined") {
    lenis = new window.Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.08,
      wheelMultiplier: 0.7,
      smoothWheel: true
    });
  }
  const getScroll = () => window.pageYOffset || document.documentElement.scrollTop || 0;
  const vertexShader = "varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }";
  const fragmentShader = `
      varying vec2 vUv;
      uniform sampler2D u_texture;
      uniform sampler2D u_dataTexture;
      uniform float u_hover; uniform float u_isAlwaysColor;
      uniform vec4 u_res; uniform float u_opacity;
      void main() {
        vec2 newUv = vUv * u_res.zw + u_res.xy;
        vec4 offset = texture2D(u_dataTexture, vUv);
        vec4 color = texture2D(u_texture, newUv - 0.02 * offset.rg);
        vec3 gray = vec3(dot(color.rgb, vec3(0.2126, 0.7152, 0.0722)));
        gl_FragColor = vec4(mix(gray, color.rgb, max(u_hover, u_isAlwaysColor)), color.a * u_opacity);
      }
    `;
  const planes = [];
  const containerToPlane = /* @__PURE__ */ new Map();
  const existing = document.getElementById("gl-canvas");
  let canvas;
  if (existing instanceof HTMLCanvasElement) {
    canvas = existing;
    canvas.classList.add("liquid-gl-canvas");
  } else {
    if (existing) existing.style.display = "none";
    canvas = document.createElement("canvas");
    canvas.className = "liquid-gl-canvas";
    if (!existing) canvas.id = "gl-canvas";
    Object.assign(canvas.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      pointerEvents: "none",
      zIndex: "5"
    });
    document.body.appendChild(canvas);
  }
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1e3);
  camera.position.z = 5;
  const viewSize = { width: 0, height: 0 };
  const updateCameraView = () => {
    const fovInRad = camera.fov * Math.PI / 180;
    viewSize.height = Math.abs(camera.position.z * Math.tan(fovInRad / 2) * 2);
    viewSize.width = viewSize.height * (window.innerWidth / window.innerHeight);
  };
  updateCameraView();
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance"
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  const textureLoader = new THREE.TextureLoader();
  const textureCache = /* @__PURE__ */ new Map();
  const textureLoadPromises = /* @__PURE__ */ new Map();
  const sharedGeometry = new THREE.PlaneGeometry(1, 1);
  function loadTextureFullyDecoded(src) {
    const cached = textureCache.get(src);
    if (cached) return Promise.resolve(cached);
    const inFlight = textureLoadPromises.get(src);
    if (inFlight) return inFlight;
    const promise = fetch(src).then((res) => {
      if (!res.ok) throw new Error("Network error loading " + src);
      return res.blob();
    }).then(
      (blob) => createImageBitmap(blob, { imageOrientation: "flipY", premultiplyAlpha: "none" })
    ).then((bitmap) => {
      const tex = new THREE.Texture(bitmap);
      tex.minFilter = USE_MIPMAPS ? THREE.LinearMipmapLinearFilter : THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.generateMipmaps = USE_MIPMAPS;
      tex.flipY = false;
      tex.needsUpdate = true;
      textureCache.set(src, tex);
      textureLoadPromises.delete(src);
      return tex;
    }).catch(() => {
      textureLoadPromises.delete(src);
      return new Promise((resolve, reject) => {
        textureLoader.load(
          src,
          (tex) => {
            tex.minFilter = USE_MIPMAPS ? THREE.LinearMipmapLinearFilter : THREE.LinearFilter;
            tex.magFilter = THREE.LinearFilter;
            tex.generateMipmaps = USE_MIPMAPS;
            textureCache.set(src, tex);
            resolve(tex);
          },
          void 0,
          reject
        );
      });
    });
    textureLoadPromises.set(src, promise);
    return promise;
  }
  function createDataTexture(size) {
    const data = new Float32Array(4 * size * size);
    if (INITIAL_NOISE) {
      for (let i = 0; i < size * size; i++) {
        const r = Math.random() * 255 - 125;
        const r1 = Math.random() * 255 - 125;
        const stride = i * 4;
        data[stride] = r;
        data[stride + 1] = r1;
        data[stride + 2] = r;
      }
    }
    const texture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat, THREE.FloatType);
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    texture.needsUpdate = true;
    return { data, texture };
  }
  const dummyData = new THREE.DataTexture(new Float32Array(4), 1, 1, THREE.RGBAFormat, THREE.FloatType);
  dummyData.needsUpdate = true;
  const dummyMat = new THREE.ShaderMaterial({
    uniforms: {
      u_texture: { value: new THREE.Texture() },
      u_dataTexture: { value: dummyData },
      u_hover: { value: 0 },
      u_isAlwaysColor: { value: 0 },
      u_res: { value: new THREE.Vector4(0, 0, 1, 1) },
      u_opacity: { value: 1 }
    },
    vertexShader,
    fragmentShader,
    transparent: true
  });
  const dummyMesh = new THREE.Mesh(sharedGeometry, dummyMat);
  dummyMesh.visible = true;
  dummyMesh.frustumCulled = false;
  dummyMesh.position.z = -99999;
  scene.add(dummyMesh);
  renderer.compile(scene, camera);
  const viewportObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        const p = containerToPlane.get(e.target);
        if (p) p.isInViewport = e.isIntersecting;
      });
    },
    { rootMargin: "300px 0px 300px 0px" }
  );
  function getBounds(el) {
    const r = el.getBoundingClientRect();
    return { top: r.top + getScroll(), left: r.left, width: r.width, height: r.height };
  }
  function getCoverUniforms(assetW, assetH, containerW, containerH) {
    const imgAsp = assetW / assetH;
    const conAsp = containerW / containerH;
    let x = 0, y = 0, z = 1, w = 1;
    if (imgAsp > conAsp) {
      z = conAsp / imgAsp;
      x = (1 - z) / 2;
    } else {
      w = imgAsp / conAsp;
      y = (1 - w) / 2;
    }
    return new THREE.Vector4(x, y, z, w);
  }
  function fadeInShader(p, ease = "sine") {
    const c = p.container;
    const delay = parseFloat(c.dataset.animDelay || "0") * 1e3;
    const duration = parseFloat(c.dataset.animDuration || "1") * 1e3;
    const u = p.material.uniforms.u_opacity;
    setTimeout(() => {
      const t0 = performance.now();
      const step = (now) => {
        const k = duration > 0 ? Math.min(1, (now - t0) / duration) : 1;
        u.value = ease === "power2in" ? k * k : -(Math.cos(Math.PI * k) - 1) / 2;
        if (k < 1) requestAnimationFrame(step);
      };
      step(t0);
    }, delay);
  }
  function startShaderFade(p, ease) {
    if (p.fadeStarted) return;
    p.fadeStarted = true;
    const poll = setInterval(() => {
      if (p.isLoaded) {
        clearInterval(poll);
        fadeInShader(p, ease);
      }
    }, 50);
  }
  function revealShaders(scope = document, ease = "sine") {
    planes.forEach((p) => {
      if (p.container.dataset.anim === "shader" && scope.contains(p.container)) startShaderFade(p, ease);
    });
  }
  function holdPlanes(scope = document) {
    planes.forEach((p) => {
      if (scope.contains(p.container)) {
        p.held = true;
        p.mesh.visible = false;
      }
    });
  }
  function releasePlanes(scope = document) {
    planes.forEach((p) => {
      if (scope.contains(p.container)) p.held = false;
    });
  }
  function whenReady(scope = document, timeoutMs = 8e3) {
    return new Promise((resolve) => {
      let done = false;
      const finish = () => {
        if (!done) {
          done = true;
          resolve();
        }
      };
      window.setTimeout(finish, timeoutMs);
      const check = () => {
        if (done) return;
        const inScope = planes.filter((p) => scope.contains(p.container));
        if (inScope.length === 0 || inScope.every((p) => p.isLoaded)) finish();
        else window.setTimeout(check, 40);
      };
      check();
    });
  }
  function initWebGLPlanes(scope) {
    (scope || document).querySelectorAll(".liquid-container").forEach((container) => {
      if (containerToPlane.has(container)) return;
      const img = container.querySelector("img");
      const video = container.querySelector("video");
      if (!img && !video) return;
      const isAlwaysColor = !GRAYSCALE_UNTIL_HOVER || container.classList.contains("is-color") ? 1 : 0;
      const gridSize = Math.round(clamp(readNumber(container, "grid", DEFAULTS.grid), 2, 1e3));
      const { data, texture: dataTexture } = createDataTexture(gridSize);
      const material = new THREE.ShaderMaterial({
        uniforms: {
          u_texture: { value: null },
          u_dataTexture: { value: dataTexture },
          u_hover: { value: 0 },
          u_isAlwaysColor: { value: isAlwaysColor },
          u_res: { value: new THREE.Vector4(0, 0, 1, 1) },
          u_opacity: { value: 0 }
        },
        vertexShader,
        fragmentShader,
        transparent: true
      });
      const mesh = new THREE.Mesh(sharedGeometry, material);
      mesh.visible = false;
      scene.add(mesh);
      const p = {
        container,
        mesh,
        material,
        isVideo: !!video,
        videoEl: video || null,
        bounds: getBounds(container),
        gridSize,
        mouseRadius: readNumber(container, "mouse", DEFAULTS.mouse),
        strength: readNumber(container, "strength", DEFAULTS.strength),
        relaxation: readNumber(container, "relaxation", DEFAULTS.relaxation),
        data,
        dataTexture,
        idle: !INITIAL_NOISE,
        mouse: { x: 0, y: 0, prevX: 0, prevY: 0, vX: 0, vY: 0 },
        currentHover: isAlwaysColor,
        targetHover: isAlwaysColor,
        isAlwaysColor,
        isLoaded: false,
        isInViewport: false,
        mouseMoveScheduled: false,
        textureReady: false,
        zoomType: container.classList.contains("zoom-in") ? "in" : container.classList.contains("zoom-out") ? "out" : null,
        baseCoverRes: null,
        fadeStarted: false,
        held: false
      };
      planes.push(p);
      containerToPlane.set(container, p);
      viewportObserver.observe(container);
      if (video) {
        const vtex = new THREE.VideoTexture(video);
        vtex.minFilter = THREE.LinearFilter;
        material.uniforms.u_texture.value = vtex;
        const onVideoReady = () => {
          const b = getBounds(container);
          material.uniforms.u_res.value = getCoverUniforms(video.videoWidth, video.videoHeight, b.width, b.height);
          p.baseCoverRes = material.uniforms.u_res.value.clone();
          try {
            renderer.initTexture(vtex);
          } catch (err) {
            console.warn(
              "[liquid-video] GPU texture upload blocked (likely missing CORS headers on the video host) \u2014 falling back to plain <video>:",
              err
            );
            p.videoTextureBroken = true;
            showElement(video);
            p.isLoaded = true;
            return;
          }
          if (container.dataset.anim !== "shader") material.uniforms.u_opacity.value = 1;
          p.isLoaded = true;
        };
        if (video.readyState >= 2) onVideoReady();
        else video.addEventListener("loadeddata", onVideoReady, { once: true });
      } else if (img) {
        const applyTexture = (tex) => {
          material.uniforms.u_texture.value = tex;
          p.textureReady = true;
          const b = getBounds(container);
          const image = tex.image;
          material.uniforms.u_res.value = getCoverUniforms(image.width, image.height, b.width, b.height);
          p.baseCoverRes = material.uniforms.u_res.value.clone();
          renderer.initTexture(tex);
          if (container.dataset.anim !== "shader") material.uniforms.u_opacity.value = 1;
          p.isLoaded = true;
        };
        const startImage = () => {
          const src = img.currentSrc || img.src;
          if (!src) return;
          const cached = textureCache.get(src);
          if (cached) applyTexture(cached);
          else loadTextureFullyDecoded(src).then(applyTexture).catch(() => showElement(img));
        };
        if (img.currentSrc || img.src) startImage();
        else img.addEventListener("load", startImage, { once: true });
      }
      if (container.dataset.anim === "shader" && !window.LiquidWebGLConfig?.deferShaderFade) {
        startShaderFade(p, "sine");
      }
      const relativePos = (clientX, clientY) => ({
        x: (clientX - p.bounds.left) / p.bounds.width,
        y: (clientY - (p.bounds.top - getScroll())) / p.bounds.height
      });
      container.addEventListener("mousemove", (e) => {
        if (p.mouseMoveScheduled) return;
        p.mouseMoveScheduled = true;
        const { clientX, clientY } = e;
        requestAnimationFrame(() => {
          const { x, y } = relativePos(clientX, clientY);
          const m = p.mouse;
          m.x = x;
          m.y = y;
          m.vX = m.x - m.prevX;
          m.vY = m.y - m.prevY;
          m.prevX = m.x;
          m.prevY = m.y;
          p.mouseMoveScheduled = false;
        });
      });
      container.addEventListener("mouseenter", (e) => {
        p.targetHover = 1;
        const { x, y } = relativePos(e.clientX, e.clientY);
        const m = p.mouse;
        m.x = m.prevX = x;
        m.y = m.prevY = y;
        m.vX = 0;
        m.vY = 0;
      });
      container.addEventListener("mouseleave", () => {
        p.targetHover = p.isAlwaysColor;
      });
    });
  }
  function cleanupWebGLPlanes(oldContainer) {
    for (let i = planes.length - 1; i >= 0; i--) {
      const p = planes[i];
      const belongs = oldContainer ? p.container === oldContainer || oldContainer.contains(p.container) : !document.body.contains(p.container);
      if (belongs) {
        p.mesh.visible = false;
        viewportObserver.unobserve(p.container);
        scene.remove(p.mesh);
        p.material.dispose();
        p.dataTexture.dispose();
        containerToPlane.delete(p.container);
        planes.splice(i, 1);
      }
    }
  }
  function refreshBounds() {
    planes.forEach((p) => {
      if (!document.body.contains(p.container)) return;
      p.bounds = getBounds(p.container);
      if (p.isVideo && p.videoEl) {
        if (p.isLoaded) {
          p.material.uniforms.u_res.value = getCoverUniforms(p.videoEl.videoWidth, p.videoEl.videoHeight, p.bounds.width, p.bounds.height);
          p.baseCoverRes = p.material.uniforms.u_res.value.clone();
        }
        return;
      }
      const tex = p.material.uniforms.u_texture.value;
      if (!tex || !tex.image) return;
      if (p.textureReady) {
        const image = tex.image;
        p.material.uniforms.u_res.value = getCoverUniforms(image.width, image.height, p.bounds.width, p.bounds.height);
        p.baseCoverRes = p.material.uniforms.u_res.value.clone();
        p.isLoaded = true;
      }
    });
  }
  function updateDataTexture(p) {
    const m = p.mouse;
    const hasForce = Math.abs(m.vX) > 1e-6 || Math.abs(m.vY) > 1e-6;
    if (p.idle && !hasForce) {
      m.vX *= 0.9;
      m.vY *= 0.9;
      return;
    }
    const maxAbs = relaxData(p.data, p.relaxation);
    if (hasForce) {
      p.idle = false;
      applyMouseForce(
        p.data,
        p.gridSize,
        m.x,
        m.y,
        m.vX,
        m.vY,
        p.mouseRadius,
        p.strength,
        p.bounds.height / p.bounds.width
      );
    } else if (maxAbs < 1e-3) {
      p.data.fill(0);
      p.idle = true;
    }
    m.vX *= 0.9;
    m.vY *= 0.9;
    p.dataTexture.needsUpdate = true;
  }
  let warned = false;
  function renderWebGL() {
    const scroll = getScroll();
    planes.forEach((p) => {
      if (p.videoTextureBroken || p.held) {
        if (p.mesh.visible) p.mesh.visible = false;
        return;
      }
      if (!p.isLoaded || !p.isInViewport) {
        if (p.mesh.visible) {
          p.mesh.visible = false;
          if (p.isVideo && p.videoEl && !p.videoEl.paused) p.videoEl.pause();
        }
        return;
      }
      p.mesh.visible = true;
      const ct = p.bounds.top - scroll;
      const dpr = Math.min(window.devicePixelRatio, 2);
      const snap = (v) => SNAP_TO_PIXELS ? Math.round(v * dpr) / dpr : v;
      const sl = snap(p.bounds.left);
      const st = snap(ct);
      const sw = snap(p.bounds.width);
      const sh = snap(p.bounds.height);
      p.mesh.scale.set(
        sw * viewSize.width / window.innerWidth,
        sh * viewSize.height / window.innerHeight,
        1
      );
      if (p.zoomType && p.baseCoverRes) {
        const raw = 1 - (ct + p.bounds.height) / (window.innerHeight + p.bounds.height);
        const progress = Math.max(0, Math.min(1, raw));
        const zf = p.zoomType === "in" ? 1 + progress * 0.08 : 1.08 - progress * 0.08;
        const bz = p.baseCoverRes.z / zf;
        const bw = p.baseCoverRes.w / zf;
        p.material.uniforms.u_res.value.set(0.5 - bz / 2, 0.5 - bw / 2, bz, bw);
      } else if (p.baseCoverRes) {
        p.material.uniforms.u_res.value.copy(p.baseCoverRes);
      }
      p.mesh.position.set(
        (sl + sw / 2) * viewSize.width / window.innerWidth - viewSize.width / 2,
        -(st + sh / 2) * viewSize.height / window.innerHeight + viewSize.height / 2,
        0
      );
      p.currentHover += (p.targetHover - p.currentHover) * 0.05;
      p.material.uniforms.u_hover.value = p.currentHover;
      updateDataTexture(p);
      if (p.isVideo && p.videoEl && p.videoEl.paused) void p.videoEl.play().catch(() => {
      });
    });
    try {
      renderer.render(scene, camera);
    } catch (err) {
      if (!warned) {
        console.warn("[liquid-webgl] renderer.render() threw \u2014 check for a cross-origin image/video without CORS headers:", err);
        warned = true;
      }
    }
  }
  initWebGLPlanes(document);
  const tick = (time) => {
    if (lenis) lenis.raf(time);
    renderWebGL();
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
  let resizeTimer;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      updateCameraView();
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      refreshBounds();
      if (lenis) lenis.resize();
    }, 150);
  });
  const onWindowLoad = () => {
    if (lenis) lenis.resize();
    planes.forEach((p) => {
      p.bounds = getBounds(p.container);
    });
  };
  if (document.readyState === "complete") onWindowLoad();
  else window.addEventListener("load", onWindowLoad);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refreshBounds).catch(() => {
  });
  if ("ResizeObserver" in window) {
    let roTimer;
    const ro = new ResizeObserver(() => {
      window.clearTimeout(roTimer);
      roTimer = window.setTimeout(refreshBounds, 100);
    });
    ro.observe(document.documentElement);
    ro.observe(document.body);
  }
  window.LiquidWebGL = {
    init: initWebGLPlanes,
    cleanup: cleanupWebGLPlanes,
    refresh: refreshBounds,
    whenReady,
    revealShaders,
    renderNow: renderWebGL,
    hold: holdPlanes,
    release: releasePlanes,
    lenis
  };
}
main();
export {
  applyMouseForce,
  relaxData
};
/*!
 * LIQUID WEBGL – PIXEL DISTORTION (TypeScript modul)
 * Port efektu "Distorted Pixels" (akella / Codrops, github.com/akella/DistortedPixels), demo 1:
 *   grid = 50, mouse = 0.25, strength = 0.11, relaxation = 0.9
 *
 * Princíp (rovnaký ako v origináli):
 *  - každý obrázok má mriežku grid × grid (float DataTexture, NearestFilter) s posunmi (x, y),
 *  - každý snímok sa posuny vynásobia `relaxation` (doznievanie),
 *  - bunky v okolí kurzora dostanú posun podľa rýchlosti myši,
 *  - shader vzorkuje obrázok na: newUv - 0.02 * offset.rg
 *
 * Oproti origináli (ten má jeden renderer na jeden obrázok a myš z `window`):
 *  - jeden spoločný canvas pre všetky `.liquid-container` (nie je limit WebGL kontextov),
 *  - myš sa počíta relatívne ku každému obrázku, cover orezanie používa skutočný pomer strán,
 *  - mriežka sa prepočítava len pre viditeľné a aktívne obrázky (pokojové sa preskočia).
 * Zachované z pôvodného Webflow kódu: šedotón s farbou na hover (is-color), zoom-in / zoom-out,
 * <video>, data-anim="shader", mobil (≤ 991px) bez WebGL.
 *
 * Nastavenie jednotlivých obrázkov cez atribúty na .liquid-container:
 *   data-grid="50" data-mouse="0.25" data-strength="0.11" data-relaxation="0.9"
 *
 * Závislosť: npm balíček "three" (+ "@types/three").
 */
