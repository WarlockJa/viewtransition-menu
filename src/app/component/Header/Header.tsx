import { useRef, useState } from "react";
import { nav } from "./links";
import SubMenu from "./SubMenu";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const [activeSub, setActiveSub] = useState<null | number>(null);
  const prevSubRef = useRef<null | number>(null);

  const handleItemChange = (newItemId: number | null) => {
    prevSubRef.current = activeSub;
    setActiveSub(newItemId);
  };

  return (
    <header className="fixed left-12 right-12 top-0 flex items-baseline gap-4 py-4 text-white">
      <p className="text-2xl">
        <strong>MEGA</strong>menu
      </p>
      <nav onPointerLeave={() => handleItemChange(null)}>
        <ul className="group flex">
          {nav.map((item) => (
            <li
              key={item.id}
              className="relative"
              onPointerEnter={() => handleItemChange(item.id)}
            >
              {!item.subnavigation && (
                <a href={item.title} className="peer block px-2 py-2">
                  {item.title}
                </a>
              )}
              {item.subnavigation && (
                <>
                  <button
                    className="peer block px-2 py-2"
                    onFocus={() => handleItemChange(item.id)}
                    onClick={() => handleItemChange(item.id)}
                    aria-expanded={activeSub === item.id}
                    aria-controls={`subnav-${item.id}`}
                  >
                    {item.title}
                  </button>
                  <AnimatePresence>
                    {activeSub === item.id && (
                      <SubMenu
                        item={item}
                        key={item.id}
                        activeItemId={activeSub}
                        transitionDirection={
                          prevSubRef.current
                            ? prevSubRef.current > item.id
                              ? 1
                              : -1
                            : 0
                        }
                      />
                    )}
                  </AnimatePresence>
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
