interface PropsType {
  children: JSX.Element;
  name: string;
}

class Component extends React.Component<PropsType, {}> {
  render() {
    return <h2>{this.props.children}</h2>;
  }
}

var a = (
  <div>
    {['foo', 'bar'].map(i => (
      <span>{i / 2}</span>
    ))}
  </div>
);
