import ReactModal from 'react-modal';


export type PopupProps = {
	isOpen: boolean
	result(s: string): void
}


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


ReactModal.setAppElement('#root');
const PopupPermissions = (props: PopupProps) => {

	return (
		<div>
		  <ReactModal style={customStyles} isOpen={props.isOpen} contentLabel="Popup Permissions" >
		    <button onClick={()=>{props.result("decline")}}>Nevermind</button>
		    <button onClick={()=>{props.result("approve")}}>Proceed</button>
		  </ReactModal>
		</div>
	)
}

export default PopupPermissions;