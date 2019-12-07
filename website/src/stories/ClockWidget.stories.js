import React from "react";
import {storiesOf} from "@storybook/react"
import ClockWidget from "../javascript/components/ClockWidget"
import { Form } from "react-bootstrap";

storiesOf("components/ClockWidget", module)
.add("basic exemple", () => (
    <Wrapper>
        <Form>
            <ClockWidget
                xs = "taille_xs"
                sm = "taille_sm"
                md = "taille_md"
                lg = "taille_lg"
                xl = "taille_xl"
                mode = "props"
            />
        </Form>
    </Wrapper>
)

)