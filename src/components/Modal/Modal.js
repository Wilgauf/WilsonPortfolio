import React from 'react';

import work from '../../images/work.jpg'
import { ModalContent, CloseModalButton, ModalImg, ModalWrapper, Background } from './ModalElements';

const Modal =(showModal, setShowModal) => {

    return (
        <div>

            {showModal ? (
                <Background>
                    <ModalWrapper showModal={showModal}>
                        <ModalImg src={work} alt='work'/>
                    </ModalWrapper>
                    <ModalContent>
                        <h1>Your links could be here</h1>
                        <p>I made this portfolio to be easily refactorable and so that it could be used for different things.</p>
                    </ModalContent>
                    <CloseModalButton aria-label='Close Modal' onClick={()=>setShowModal (prev=>!prev)}/>
                </Background>
            ): null}
        </div>
    )
}

export default Modal
