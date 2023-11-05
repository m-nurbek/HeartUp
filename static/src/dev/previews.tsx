import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import ListGroup from "../components/ListGroup.tsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/ListGroup">
                <ListGroup/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;