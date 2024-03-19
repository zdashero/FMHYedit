export const onRequest: PagesFunction = async (context) => {
  const avatar = `https://github.com/${context.params.avatar}.png`
  try {
    const response = await fetch(avatar)

    if (!response.ok) {
      throw new Error('Error fetching avatar')
    }

    return new Response(response.body, {
      status: response.status,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=14400' // Cache for 4 hours
      }
    })
  } catch (error) {
    return new Response('Error fetching avatar', { status: 500 })
  }
}
