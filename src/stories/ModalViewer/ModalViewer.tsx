import React, { FC, useState } from "react"
import Modal from "../../shared/ui/Modal/Modal"

type ModalViewerProps = {
    text: string,
}

const ModalViewer: FC<ModalViewerProps> = ({ text }) => {
    const [modalVisible, SetModalVisible] = useState(false)
    const [inputText, SetInputText] = useState(text)

    return (
        <>
            <Modal visible={modalVisible} setVisible={SetModalVisible} children={inputText} />
            <input value={inputText} onChange={(e) => SetInputText(prev => e.target.value)} />
            <button onClick={() => { SetModalVisible(() => true); console.log(modalVisible) }}>Show modal</button>
        </>
    )
}

export default ModalViewer