type PersonProps = {
  name: {
    first: string;
    middle?: string;
    last: string;
  };
};

const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.first} {props.name.middle} {props.name.last}
    </div>
  );
};

export default Person;
