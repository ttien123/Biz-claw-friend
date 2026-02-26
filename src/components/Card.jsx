export default function Card({ variant = "default", className = "", style: extraStyle, children, ...props }) {
  const styles = {
    default: {
      background: "#1a1a1a",
      border: "1px solid rgba(222,255,154,0.1)",
      borderRadius: 20,
    },
    table: {
      background: "rgba(255,255,255,0.03)",
      borderRadius: 12,
      overflow: "hidden",
    },
    roadmap: {
      background: "linear-gradient(145deg, #111, #000)",
      border: "1px solid rgba(222,255,154,0.1)",
      borderRadius: 16,
    },
  };

  return (
    <div
      className={className}
      style={{ ...styles[variant], ...extraStyle }}
      {...props}
    >
      {children}
    </div>
  );
}
