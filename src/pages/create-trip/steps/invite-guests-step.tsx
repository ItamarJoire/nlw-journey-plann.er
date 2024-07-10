import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

interface InviteGuestsStepProps {
  openGuestsModal: () => void
  emailsToInvite: string[]
  openConfirmTripModal: () => void
}

export function InviteGuestsStep({ 
  openGuestsModal, 
  emailsToInvite, 
  openConfirmTripModal 
}: InviteGuestsStepProps){
  return(
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3 ">
      <button type='button' onClick={openGuestsModal} className='flex items-center gap-2 flex-1 text-left'>
        <UserRoundPlus className='size-5 text-zinc-400'/>
        {emailsToInvite.length > 0 ? (
          <span className='text-zinc-100 text-lg flex-1'>
            {emailsToInvite.length} convidado(s)
          </span>
        ) : (
          <span className='text-zinc-400 text-lg flex-1'>Quem estará na viagem?</span>
        )}
        <input type="text" placeholder="" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"/>
      </button>
    
    <div className='w-px h-6 bg-zinc-800'/>

    <Button onClick={openConfirmTripModal}>
      Confirmar viagem
      <ArrowRight className='size-5'/>
    </Button>
  </div>
  )
}