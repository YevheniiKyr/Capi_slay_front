import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Row} from "react-bootstrap";
import CapibaraItem from "./CapibaraItem";
import {Context} from "../index";

const CapibaraList = observer(() => {
    const {capibaras} = useContext(Context)
        return (
            <Row className="d-flex m-auto ">
                {
                    capibaras.capibaras.length === 0 ?
                        <div>SLAY</div>
                        :
                    capibaras.capibaras.map(

                        capi => <CapibaraItem key={capi.id} capibara = {capi} />

                    )
                }
            </Row>
        );
    }
)

export default CapibaraList;