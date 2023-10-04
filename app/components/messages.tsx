'use client'

import { useSearchParams } from 'next/navigation'

export default function Messages() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')
  const message = searchParams.get('message')
  return (
    <>
      {error && (
        <p>
          Cet utilisateur n'existe pas
        </p>
      )}
      {message && (
        <p>
          Veuillez vérifier votre boite mail pour valider votre inscription !
        </p>
      )}
    </>
  )
}
