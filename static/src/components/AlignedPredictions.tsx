import './css_styles_components/AlignedPredictions.css';
import PredictionYolo from "./PredictionYolo.tsx";
import PredictionCar from "./PredictionCar.tsx"; // Import your component-specific CSS file

const AlignedPredictions = () => {
  return (
      <div className="container">
          <PredictionCar />
          <PredictionYolo />
    </div>
  );
};

export default AlignedPredictions;