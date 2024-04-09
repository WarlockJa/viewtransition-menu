import { usePresence, motion } from "framer-motion";
import { useEffect } from "react";

interface ISubMenuProps {
  item: INavItem;
  activeItemId: number;
  transitionDirection: -1 | 0 | 1;
}

export default function SubMenu({
  item,
  activeItemId,
  transitionDirection,
}: ISubMenuProps) {
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    const handleRemoval = () => {
      activeItemId !== item.id && safeToRemove;
    };

    !isPresent && setTimeout(handleRemoval, 1000);
  }, [isPresent]);

  return (
    <motion.div
      initial={{
        translateX: `${
          transitionDirection === 0
            ? 0
            : transitionDirection > 0
            ? item.neighbours.right
            : item.neighbours.left
        }px`,
      }}
      animate={{ translateX: "0px" }}
      transition={{ ease: "easeInOut", duration: 0.2 }}
      className="absolute left-0 top-full hidden w-[500px] rounded-lg bg-white p-1 text-black peer-aria-expanded:block"
    >
      <div className="absolute -top-2 left-8 h-0 w-0 border-b-[12px] border-l-[12px] border-r-[12px] border-b-white border-l-transparent border-r-transparent" />
      <div className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0, translateX: `${transitionDirection * 100}px` }}
          animate={{ opacity: 1, translateX: `0px` }}
          transition={{ ease: "easeInOut" }}
          exit={{ opacity: 0 }}
          className="flex"
        >
          {item.leftBar && (
            <div className="min-h-[300px] w-[140px] rounded-sm bg-gray-100 px-4 py-5">
              <p className="text-sm">{item.leftBar}</p>
            </div>
          )}
          <div className="w-full">
            <ul className="grid grid-cols-2 gap-2 p-4">
              {item.subnavigation &&
                item.subnavigation.map((subitem) => (
                  <li key={subitem.title}>
                    <a href={subitem.href}>{subitem.title}</a>
                  </li>
                ))}
            </ul>
            {item.bottomBar && (
              <div className="mt-4 rounded-md bg-gray-100 p-4">
                <p className="text-sm uppercase">{item.bottomBar.title}</p>
                <ul className="mt-2 grid grid-cols-2 gap-x-2 gap-y-1">
                  {item.bottomBar.links.map((link) => (
                    <li key={link.title}>
                      <a href={link.href}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
