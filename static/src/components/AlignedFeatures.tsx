import FeatureBox from "./FeatureBox.tsx";

function AlignedFeatures({ src1, src2, src3 }) {
  return (
    <div className="container">
      <FeatureBox src={src1} alt={"image of a gear"} heading={"How Our Platform Works"} bodyInfo={"Our AI platform uses advanced algorithms to analyze medical data and provide real-time updates on the progress of the project. It combines user-friendly interactions with informative content, ensuring a seamless experience for our users."} />
      <FeatureBox src={src2} alt={"image of a crosshair for detection"} heading={"Secure and Reliable Data Analysis"} bodyInfo={"Our platform employs state-of-the-art security measures to ensure the confidentiality and integrity of the medical data. With our reliable data analysis, users can trust the accuracy of the results."}/>
      <FeatureBox src={src3} alt={"image of a shield for protection"} heading={"Enhanced Early Detection of Coronary Artery Disease"} bodyInfo={"Our platform aims to revolutionize the early detection of Coronary Artery Disease by leveraging AI technology. By providing real-time updates and analysis, we enable healthcare professionals to identify potential risks and intervene earlier."}/>
    </div>
  );
}

export default AlignedFeatures;
