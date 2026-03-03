export const glassStyle = {
  background: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
};

export const hoverGlass = (e, enter) => {
  e.currentTarget.style.borderColor = enter
    ? "rgba(80,103,255,0.35)"
    : "rgba(255,255,255,0.08)";
  e.currentTarget.style.boxShadow = enter
    ? "0 12px 40px rgba(80,103,255,0.15)"
    : "0 8px 32px rgba(0,0,0,0.25)";
  e.currentTarget.style.transform = enter
    ? "translateY(-2px)"
    : "translateY(0)";
};
