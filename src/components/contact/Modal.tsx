class ModalProps {
  constructor(public symptom: string, public desc: string) {}
}

export default function Modal(props: ModalProps) {
  return (
    <dialog
      id={`modal-${props.symptom}`}
      className="modal"
      key={`modal${props.symptom}`}
    >
      <form method="dialog" className="modal-box">
        <button className="btn-ghost btn-sm btn-circle btn absolute right-3 top-3">
          ✕
        </button>
        <h3 className="mt-5 text-lg font-bold">{props.symptom}</h3>
        <p className="mb-2 py-4">{props.desc}</p>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
