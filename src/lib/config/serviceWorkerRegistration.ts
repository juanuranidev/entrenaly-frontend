import ENV from "lib/utils/env";

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] es la dirección localhost para IPv6.
    window.location.hostname === "[::1]" ||
    // 127.0.0.0/8 son consideradas localhost para IPv4.
    window.location.hostname.match(/^127(?:\.[0-9]+){0,2}\.[0-9]+$/)
);

interface Config {
  onUpdate?: (registration: ServiceWorkerRegistration) => void;
  onSuccess?: (registration: ServiceWorkerRegistration) => void;
}

export function register(config?: Config) {
  if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    const publicUrl = new URL(ENV.FRONTEND_BASE_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener("load", () => {
      const swUrl = `${ENV.FRONTEND_BASE_URL}/service-worker.js`;

      if (isLocalhost) {
        // Esto es ejecutado en localhost.
        checkValidServiceWorker(swUrl, config);

        navigator.serviceWorker.ready.then(() => {
          console.log(
            "Esta aplicación web está siendo servida por el cache del Service Worker. Para más detalles, visita https://cra.link/PWA"
          );
        });
      } else {
        // No es localhost. Sólo registrar el Service Worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl: string, config?: Config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === "installed") {
            if (navigator.serviceWorker.controller) {
              console.log(
                "Nuevo contenido está disponible y será usado cuando todas las pestañas del sitio se cierren."
              );

              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              console.log("El contenido está cacheado para usar sin conexión.");

              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error("Error durante el registro del Service Worker:", error);
    });
}

function checkValidServiceWorker(swUrl: string, config?: Config) {
  fetch(swUrl, {
    headers: { "Service-Worker": "script" },
  })
    .then((response) => {
      const contentType = response.headers.get("content-type");
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf("javascript") === -1)
      ) {
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        "No se encontró una conexión a internet. La aplicación está corriendo en modo offline."
      );
    });
}

export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
