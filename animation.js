const tl = gsap.timeline()

tl.fromTo("#title", {x: -200, opacity: 0}, { x: 0, opacity: 1, duration: 1, ease: "power2"});
tl.fromTo("#permission", {scale: 0.75, opacity: 0}, { scale: 1, opacity: 1, duration: 1, ease: "power2"});
//tl.to(".purple", { x: 600, duration: 1 });
//tl.to(".orange", { x: 600, duration: 1 });

function hidePermission() {
    tl.fromTo("#permission", { scale: 1, opacity: 1}, {scale: 0.75, opacity: 0, duration: 1, ease: "power2"},);
}