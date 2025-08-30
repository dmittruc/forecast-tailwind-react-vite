import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import WeatherCard from '@components/WeatherCard';

const data = [
  {
    id: 1,
    city: 'Киев',
    temp: '-5°C',
    max: '+53°C',
    min: '-63°C',
    condition: 'Облачно',
  },
  {
    id: 2,
    city: 'Львов',
    temp: '-51°C',
    max: '+53°C',
    min: '-63°C',
    condition: 'Ясно',
  },
  {
    id: 3,
    city: 'Одесса',
    temp: '-52°C',
    max: '+53°C',
    min: '-63°C',
    condition: 'Облачно',
  },
  {
    id: 4,
    city: 'Днепр',
    temp: '-53°C',
    max: '+53°C',
    min: '-63°C',
    condition: 'Ясно',
  },
];

const DetailsPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  function moveToIndex(newIndex: number) {
    const newDirection = newIndex > selectedIndex ? 1 : -1;
    setSelectedIndex(newIndex);
    setDirection(newDirection);
  }

  const getVisibleIndices = () => {
    const prevIndex = selectedIndex === 0 ? data.length - 1 : selectedIndex - 1;
    const nextIndex = selectedIndex === data.length - 1 ? 0 : selectedIndex + 1;
    return { prevIndex, currentIndex: selectedIndex, nextIndex };
  };

  const { prevIndex, currentIndex, nextIndex } = getVisibleIndices();

  return (
    <div className="flex justify-center gap-16 p-4 items-center">
      <motion.div
        onClick={() => moveToIndex(prevIndex)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <WeatherCard data={data[prevIndex]} isActive={false} />
      </motion.div>

      <AnimatePresence custom={direction} initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          initial={{ opacity: 0, scale: 0.8, x: direction * 100 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
              type: 'spring',
              stiffness: 300,
              damping: 30,
            },
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            x: direction * -100,
            transition: { duration: 0.2 },
          }}
        >
          <WeatherCard data={data[currentIndex]} isActive={true} />
        </motion.div>
      </AnimatePresence>

      <motion.div
        onClick={() => moveToIndex(nextIndex)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <WeatherCard data={data[nextIndex]} isActive={false} />
      </motion.div>
    </div>
  );
};

export default DetailsPage;
