const baseStyles = "flex h-auto lg:pb-44 pb-36 lg:min-w-72 w-44 mx-auto rounded-md border bg-gray-100/40 focus-visible:outline-none px-3 py-2 text-sm text-muted "
import Button from "@/app/components/Button"
import * as editable from "@zag-js/editable"
import { useMachine, normalizeProps } from "@zag-js/react"
import { useId } from "react"
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const DetailCard = () => {
  const [state, send] = useMachine(editable.machine({
    id: useId(),
    value: 'Option 1',
    activationMode: "dblclick",
    onValueChange(details) {
      console.log("Value changed", details.value)
    },
    onValueCommit: (details) => {
      console.log("Value submitted", details.value)
    },
  }))
  const api = editable.connect(state, send, normalizeProps)

  return (
    <>
      <div {...api.rootProps} className="text-black/80 ml-3">
        <div {...api.areaProps}>

          {/* @ts-ignore */}
          {api.isEditing && <textarea {...api.inputProps} className={baseStyles} maxLength={150} wrap="wrap" minLength={10} rows={4} cols={40} />}
          {!api.isEditing && <div {...api.previewProps} className="pb-12 pt-4 text-ellipsis px-4 max-w-[350px] flex bg-gray-200/30 mt-3 rounded-2xl" />}
        </div>

        <div className="flex flex-row justify-end">
          {
            !api.isEditing && <button {...api.editTriggerProps} className="text-sm focus-visible:outline-none py-2 px-4 inline-flex mt-2 bg-gray-200/80 rounded-xl">
              edit
            </button>
          }
        </div>


        {
          api.isEditing && (
            <div className="flex flex-row gap-4 my-4">
              <button className="bg-blue-500 inline-flex justify-center items-center rounded-2xl px-4 py-2 text-white" {...api.submitTriggerProps}>Save</button>
              <button className="bg-blue-500 inline-flex justify-center items-center rounded-2xl px-4 py-2 text-white" {...api.cancelTriggerProps}>Cancel</button>
            </div>
          )
        }

        <hr color="indigo" className="my-8" />
      </div>

      <div className="flex justify-center items-center cursor-pointer relative -top-12 z-50">
        <PlusCircleIcon className="h-8 w-8 text-gray-800/90" />
      </div>
    </>
  )
}

export default DetailCard