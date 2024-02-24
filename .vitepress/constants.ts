import type { DefaultTheme } from 'vitepress'
// @unocss-include

export const meta = {
  name: 'freemediaheckyeah',
  description: 'The largest collection of free stuff on the internet!',
  hostname: 'https://fmhy.net',
  keywords: ['stream', 'movies', 'gaming', 'reading', 'anime']
}

export const commitRef = process.env.CF_PAGES
  ? `<a href="https://github.com/fmhy/FMHYEdit/commit/${
      process.env.CF_PAGES_COMMIT_SHA
    }">${process.env.CF_PAGES_COMMIT_SHA.slice(0, 8)}</a>`
  : 'dev'

export const feedback = `<a href="/feedback" class="feedback-footer">Made with ❤️</a>`

export const search: DefaultTheme.Config['search'] = {
  options: {
    miniSearch: {
      searchOptions: {
        combineWith: 'AND',
        fuzzy: false,
        // @ts-ignore
        boostDocument: (
          _,
          term,
          storedFields: Record<string, string | string[]>
        ) => {
          const titles = (storedFields?.titles as string[])
            .filter((t) => Boolean(t))
            .map((t) => t.toLowerCase())
          // Uprate if term appears in titles. Add bonus for higher levels (i.e. lower index)
          const titleIndex =
            titles
              .map((t, i) => (t?.includes(term) ? i : -1))
              .find((i) => i >= 0) ?? -1
          if (titleIndex >= 0) return 10000 - titleIndex

          return 1
        }
      }
    },
    detailedView: true
  },
  provider: 'local'
}

export const socialLinks: DefaultTheme.SocialLink[] = [
  { icon: 'github', link: 'https://github.com/fmhy/FMHYEdit' },
  { icon: 'discord', link: 'https://discord.gg/Stz6y6NgNg' },
  {
    icon: 'reddit',
    link: 'https://reddit.com/r/FREEMEDIAHECKYEAH'
  }
]

// TODO: make this less ugly
export const sidebar: DefaultTheme.Sidebar | DefaultTheme.NavItemWithLink[] = [
  {
    text: '<span class="i-twemoji-name-badge"></span> Adblocking / Privacy',
    link: '/adblockvpnguide'
  },
  {
    text: '<span class="i-twemoji-robot"></span> Artificial Intelligence',
    link: '/ai'
  },
  {
    text: '<span class="i-twemoji:television"></span> Movies / TV / Anime',
    link: '/videopiracyguide'
  },
  {
    text: '<span class="i-twemoji-musical-note"></span> Music / Podcasts / Radio',
    link: '/audiopiracyguide'
  },
  {
    text: '<span class="i-twemoji-video-game"></span> Gaming / Emulation',
    link: '/gamingpiracyguide'
  },
  {
    text: '<span class="i-twemoji-green-book"></span> Books / Comics / Manga',
    link: '/readingpiracyguide'
  },
  {
    text: '<span class="i-twemoji-floppy-disk"></span> Downloading',
    link: '/downloadpiracyguide'
  },
  {
    text: '<span class="i-twemoji-cyclone"></span> Torrenting',
    link: '/torrentpiracyguide'
  },
  {
    text: '<span class="i-twemoji-brain"></span> Educational',
    link: '/edupiracyguide'
  },
  {
    text: '<span class="i-twemoji:mobile-phone"></span> Android / iOS',
    link: '/android-iosguide'
  },
  {
    text: '<span class="i-twemoji-penguin"></span> Linux / MacOS',
    link: '/linuxguide'
  },
  {
    text: '<span class="i-twemoji:globe-showing-asia-australia"></span> Non-English',
    link: '/non-english'
  },
  {
    text: '<span class="i-twemoji:open-file-folder"></span> Miscellaneous',
    link: '/miscguide'
  },
  {
    text: '🔧 Tools',
    collapsed: false,
    items: [
      { text: '💻 System Tools', link: '/system-tools' },
      { text: '🗃️ File Tools', link: '/file-tools' },
      { text: '🔗 Internet Tools', link: '/internet-tools' },
      { text: '💬 Social Media Tools', link: '/social-media-tools' },
      { text: '📝 Text Tools', link: '/text-tools' },
      { text: '👾 Gaming Tools', link: '/gamingpiracyguide#gaming-tools' },
      { text: '📷 Image Tools', link: '/img-tools' },
      { text: '📼 Video Tools', link: '/video-tools' },
      { text: '🔊 Audio Tools', link: '/audiopiracyguide#audio-tools' },
      {
        text: '🍎 Educational Tools',
        link: '/edupiracyguide#educational-tools'
      },
      { text: '👨‍💻 Developer Tools', link: '/devtools' }
    ]
  },
  {
    text: '➕️ More',
    collapsed: true,
    items: [
      { text: '🔞 NSFW', link: '/nsfwpiracy' },
      { text: '⚠️ Unsafe Sites', link: '/unsafesites' },
      { text: '📦 Storage', link: '/storage' }
    ]
  }
]
