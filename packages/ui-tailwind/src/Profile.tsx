interface ProfileProps {
  name: string;
  age: number;
}

interface _ProfileProps {
  user: {
    name: string;
    age: number;
  };
}

export const Profile = ({ name, age }: ProfileProps) => {
  return (
    <dl className="border-2 border-gray-300 p-2 rounded-sm">
      <div className="flex gap-2">
        <dt className="font-semibold">Name</dt>
        <dd>{name}</dd>
      </div>
      <div className="flex gap-2">
        <dt className="font-semibold">Age</dt>
        <dd>{age}</dd>
      </div>
    </dl>
  );
};
