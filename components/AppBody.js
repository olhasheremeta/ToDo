class AppBody extends React.Component {

  state = {
    items: 'tasks'
  }

  render() {
    return (
    <div>
      <span>Here you will see your {this.state.items}</span>
    </div>
    )
  }
}

export default AppBody;