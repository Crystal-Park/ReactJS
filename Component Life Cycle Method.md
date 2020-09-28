# LIFE CYCLE METHODE
- constructor : mounting methode (if you want use this use super(props). I dont know why use that.)
- mounting methode 
    : componentDidMount() -> after render
- update methode (every update render)
    : shouldComponentUpdate() -> basically consider update
    : componentDidUpdate()
- unmounting methode (evrey unmounting time. (ex, refresh page))
    : componentWillUnmount()