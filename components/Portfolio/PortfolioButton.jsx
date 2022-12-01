import { motion } from "framer-motion";

export default function PortfolioButton({ items, sort, active }) {
  console.log("button");
  return (
    <div className="portfolio-nav">
      {items.map((category, i) => (
        <button key={i} onClick={() => sort(category)}>
          {category}
          {active === category && (
            <motion.div className="underline" layoutId="underline" />
          )}
        </button>
      ))}
    </div>
  );
}
