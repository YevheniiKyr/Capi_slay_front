import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {Row} from "react-bootstrap";
import CapibaraItem from "./CapibaraItem";
import {observer} from "mobx-react-lite";
import CapiFriendItem from "./CapiFriendItem";

const CapibaraFriendsList = observer(() => {

    const {currentUser} = useContext(Context)
    return (
        <Row className="d-flex m-auto ">
            {
                currentUser.capiFriends.length === 0 ?
                    <div>SLAY</div>
                    :
                    currentUser.capiFriends.map(

                            capi => <CapibaraItem key={capi.id} capibara = {capi} />

                        )

            }
        </Row>
    );

});

export default CapibaraFriendsList;