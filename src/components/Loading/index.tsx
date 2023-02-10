type LoadingProps = {
  loading?: boolean
}

const Loading = ({ loading = false }: LoadingProps) => {
  return <>{loading ? 'Loading...' : ''}</>
}

export default Loading
