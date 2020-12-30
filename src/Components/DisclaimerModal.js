import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const DisclaimerModal = (props) =>{

    const discParagraph1 = `Wir nutzen Cookies auf unserer Website. Einige von ihnen sind essenziell, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern.`

    const discParagraph2 = `Essenziell`
    
    const discParagraph3 = `Externe Medien`
    

    const [modal, setModal] = useState(true);

    const toggle = () => {
        setModal(!modal);
    }

    return (
        <>
        <Modal isOpen={modal} toggle={toggle} className={props.className} style={{maxWidth: 600}}>
            <ModalHeader toggle={toggle}><b>Cookie-Zustimmung</b></ModalHeader>
            <ModalBody style={{maxHeight: '700px', overflowY: 'auto'}}>
                <p>{discParagraph1}</p>
                <p>{discParagraph2}</p>
                <p>{discParagraph3}</p>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={toggle}>Accept</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
        </>
    );
}

export default DisclaimerModal;