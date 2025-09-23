interface UserProfileProps {
  name?: string
  email?: string
}

export const UserProfile = ({ name = '', email = '' }: UserProfileProps) => {
  return (
    <dl>
      <div>
        <dt>Name</dt>
        <dd>{name}</dd>
      </div>
      <div>
        <dt>Email</dt>
        <dd>{email}</dd>
      </div>
    </dl>
  )
}
