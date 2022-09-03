import Select from 'components/select'
import { Globe } from 'assets/svg'
import { Container, Top, Link, Links, LinkItem, Lang } from './footer.styled'

function Footer() { 
  const lang = [
    {
      label: 'Bahasa Indonesia',
      value: 'indonesia',
    },
    {
      label: 'English',
      value: 'english',
    },
  ]


  return (
    <Container>
      <Top>
        <Link href="/contactus">Questions? Contact us.</Link>
      </Top>
      <Links>
        <LinkItem>
          <Link href='/support/412'>FAQ</Link>
        </LinkItem>
        <LinkItem>
          <Link href='/support'>Help Center</Link>
        </LinkItem>
        <LinkItem>
          <Link href='/youraccount'>Account</Link>
        </LinkItem>
        <LinkItem>
          <Link href='/media'>Media Center</Link>
        </LinkItem>
        <LinkItem>
          <Link href='/investor'>Investor Relations</Link>
        </LinkItem>
        <LinkItem>
          <Link href='/jobs'>Jobs</Link>
        </LinkItem>
        <LinkItem>
          <Link href='/redeem'>Redeem Gift Cards</Link>
        </LinkItem>
        <LinkItem>
          <Link href='/buy'>Buy Gift Cards</Link>
        </LinkItem>
        <LinkItem>
          <Link href='/watch'>Ways to Watch</Link>
        </LinkItem>
        <LinkItem>
          <Link href='/terms'>Terms of Use</Link>
        </LinkItem>
        <LinkItem>
          <Link href='/privacy'>Privacy</Link>
        </LinkItem>
        <LinkItem>
          <Link href='/cookie'>Cookie Preferences</Link>
        </LinkItem>
        <LinkItem>
          <Link href='/corporate'>Corporate Information</Link>
        </LinkItem>
        <LinkItem>
          <Link href='/contactus'>Contact Us</Link>
        </LinkItem>
        <LinkItem>
          <Link href='/speedtest'>Speed Test</Link>
        </LinkItem>
        <LinkItem>
          <Link href='/legal'>Legal Notices</Link>
        </LinkItem>
        <LinkItem>
          <Link href='/onlynetflix'>Only on Netflix</Link>
        </LinkItem>
      </Links>
      <Lang>
        <Select options={lang} value={lang[1]} icon={<Globe />} />
      </Lang>
    </Container>
  )
}

export default Footer
