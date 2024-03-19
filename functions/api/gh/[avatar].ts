export const onRequest: PagesFunction = async (context) => {
  const avatar = `https://github.com/${context.params.avatar}.png`

  const req = await fetch(avatar)
  const res = await req.blob()

  return res
}
