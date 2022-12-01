import { motion } from "framer-motion";

export default function PortfolioItem({ items, active }) {
  console.log("menu");
  return (
    <div className="portfolio">
      {items.map(({ id, number, category }) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: ["All", category].includes(active) ? 1 : 0.25 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          key={id}
          layout={id}
          className="portfolio-item"
        >
          <h1>{number}</h1>
          <p>{category}</p>
        </motion.div>
      ))}
    </div>
  );
}
