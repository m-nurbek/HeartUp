import FeatureBox from "./FeatureBox.tsx";

function AlignedFeatures({ src1, src2, src3, heading1, heading2, heading3, text1, text2, text3}) {
  return (
    <div className="container">
      <FeatureBox src={src1} alt={"image of a gear"} heading={heading1} bodyInfo={text1} />
      <FeatureBox src={src2} alt={"image of a crosshair for detection"} heading={heading2} bodyInfo={text2}/>
      <FeatureBox src={src3} alt={"image of a shield for protection"} heading={heading3} bodyInfo={text3}/>
    </div>
  );
}

export default AlignedFeatures;
