import React, { useMemo, useRef } from "react";
import "./new.css";

export default function New() {
  const sections = useMemo(
    () => [
      {
        id: "exterior",
        label: "Exterior",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2200&q=80",
      },
      {
        id: "interior",
        label: "Interior",
        image:
          "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=2200&q=80",
      },
      {
        id: "walkthrough",
        label: "Walkthrough",
        image:
          "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=2200&q=80",
      },
    ],
    []
  );

  const refs = useRef({});

  const goTo = (id) => {
    const el = refs.current[id];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="stackWrap">
      {/* ===== Option Bar (above images) ===== */}
      <div className="optionBar">
        <div className="optionInner">
          {sections.map((s) => (
            <button
              key={s.id}
              type="button"
              className="optionBtn"
              onClick={() => goTo(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* ===== Stacking Images ===== */}
      {sections.map((s, i) => (
        <section
          key={s.id}
          ref={(node) => (refs.current[s.id] = node)}
          className="stackSection"
          style={{
            backgroundImage: `url(${s.image})`,
            zIndex: i + 1,
          }}
          aria-label={s.label}
        />
      ))}

      <div className="stackSpacer" />
    </div>
  );
}
