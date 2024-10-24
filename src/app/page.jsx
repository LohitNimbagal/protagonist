import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, CheckSquare, DollarSign, GraduationCap, Instagram, Star, Video, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import templates from '@/data/all-templates.json'
import AddonHoverCard from "@/components/addon-hover-card"
import { ReadMoreDialog } from "@/components/readmore-dialog"

const cardInfo = [
  {
    icon: <Video className="w-8 h-8  text-[#283f33]" />,
    area: 'Content Creation',
    info: 'Track and measure your content creation progress across platforms.'
  },
  {
    icon: <BookOpen className="w-8 h-8  text-[#283f33]" />,
    area: 'Academics',
    info: 'Track and measure your content creation progress across platforms.'
  },
  {
    icon: <DollarSign className="w-8 h-8  text-[#283f33]" />,
    area: 'Fitness & Finances',
    info: 'Track and measure your content creation progress across platforms.'
  },
  {
    icon: <CheckSquare className="w-8 h-8  text-[#283f33]" />,
    area: 'Tasks, Habits, Journal',
    info: 'Track and measure your content creation progress across platforms.'
  },
]

const stats = [
  {
    icon: <Youtube className="h-8 w-8 md:h-12 md:w-12 text-[#253d30] mb-2" />,
    stats: '176K+',
    area: 'YouTube Followers',
  },
  {
    icon: <Instagram className="h-7 w-7 md:h-11 md:w-11 text-[#253d30] mb-2" />,
    stats: '29K+',
    area: 'Instagram Followers',
  },
  {
    icon: <GraduationCap className="h-8 w-8 md:h-12 md:w-12 text-[#253d30] mb-1" />,
    stats: '2023',
    area: 'IIT Hyderabad',
  },
]

export default function NotionTemplateLanding() {

  return (
    <div vaul-drawer-wrapper="" className="bg-muted-background">
      <div className="flex items-center justify-center bg-muted-background text-[#253d30]">

        <main className="min-h-screen max-w-7xl flex flex-col items-center justify-center space-y-10 md:space-y-20">

          <section className="container p-2 md:w-full">

            <h1 className="text-2xl md:text-3xl font-bold text-center pt-8">
              Become the Main Character of Your Life
            </h1>
            <p className="text-lg text-muted-foreground text-center pt-4 mb-6">
              Welcome to Protagonist Syndrome.
            </p>

            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center order-2 md:order-1">
                <Badge variant="secondary" className="mb-2 self-start">Special Offer</Badge>
                <h2 className="text-2xl md:text-4xl md:leading-[3rem] font-bold mb-4 py-1">
                  <span className="block">The Ultimate Notion <br className="md:hidden" />Template to</span>
                  <span className="bg-[#253d30] py-1 px-1 text-white">Run Your Like Like a PRO</span>
                </h2>
                <p className="text-base text-muted-foreground mb-6">
                  Become the main hero of your story in 180 days.
                </p>
                <p className="text-base text-muted-foreground mb-6">
                  Protagonist Blueprint also includes (
                  <span className="mx-1 text-[#253d30] font-semibold hover:cursor-pointer">
                    <AddonHoverCard template={templates[2]}>Academic Weapon</AddonHoverCard>
                  </span>
                  +
                  <span className="mx-1 text-[#253d30] font-semibold hover:cursor-pointer">
                    <AddonHoverCard template={templates[1]}>Content brain</AddonHoverCard>
                  </span>
                  ) templates worth of ₹1,100/- for free!
                </p>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-bold text-primary">₹849</span>
                  <span className="text-sm text-muted-foreground line-through">₹1,950</span>
                </div>
                <div className="w-96 flex flex-col sm:flex-row gap-4">
                  <Link href={templates[0].cta} className="w-full" target="_blank">
                    <Button size="" className="w-full sm:w-full bg-[#253d30] order-2 md:order-1">
                      Buy Now
                    </Button>
                  </Link>
                  <ReadMoreDialog template={templates[0]} />
                </div>
              </div>
              <div className="w-full md:w-1/2 relative p-2 flex items-center order-1 md:order-2">
                <Image
                  src={"https://rowan-donut-ffc.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F170a0660-4ab7-4462-a6bc-d2ab83238013%2Fda856a28-9d2b-4e3f-aaea-f93f6768988c%2Fprotagonist_blueprint_thumb.webp?table=block&id=1231975d-b166-8082-b884-c4494c1df13a&spaceId=170a0660-4ab7-4462-a6bc-d2ab83238013&width=1420&userId=&cache=v2"}
                  alt="Notion Template Preview"
                  width={1380}
                  height={720}
                  className="aspect-video object-contain rounded-md w-full h-fit"
                />
              </div>
            </div>
          </section>

          <section className="w-full pb-10 md:pb-20 px-6 md:px-20 md:space-y-40 flex flex-col items-center">

            <div className="w-full md:w-3/4 md:h-20 mb-10 md:mb-2 flex items-center justify-center gap-4 text-center md:gap-20 border p-4 md:p-20 rounded-md border-green-900">
              {stats.map(stat => (
                <div className="flex flex-col items-center" key={stat.area}>
                  {stat.icon}
                  {/* <p className="flex flex-col items-start justify-center"> */}
                  <span className="text-lg md:text-xl font-bold">{stat.stats}</span>
                  <span className="text-xs md:text-base text-muted-background">{stat.area}</span>
                  {/* </p> */}
                </div>
              ))}
            </div>

            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row gap-2 md:gap-10">

                <div className="w-full md:w-1/2 relative p-2 hidden xl:block">
                  <Image
                    src="/stats/academics.jpg"
                    alt="Notion Template Preview"
                    width={1380}
                    height={720}
                    className="aspect-video object-contain rounded-md w-72 absolute top-6 -left-2"
                  />
                  <Image
                    src="/stats/fitness.jpg"
                    alt="Notion Template Preview"
                    width={1380}
                    height={720}
                    className="object-contain rounded-md w-fit h-[21rem] absolute right-10 -top-6"
                  />
                  <Image
                    src="/stats/content.jpg"
                    alt="Notion Template Preview"
                    width={1380}
                    height={720}
                    className="object-contain rounded-md h-80 absolute w-fit bottom-4 left-0"
                  />
                  <Image
                    src="/stats/tracking.jpg"
                    alt="Notion Template Preview"
                    width={1380}
                    height={720}
                    className="aspect-video object-contain rounded-md w-72 absolute bottom-14 right-10"
                  />
                </div>

                <div className="w-full md:w-1/2 relative p-2 xl:hidden">
                  <Image
                    src='/images/images.png'
                    width='1920'
                    height='1080'
                    alt='sankho images'
                  />
                </div>

                <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-start relative">
                  <div className="space-y-6 ">
                    <h3 className="text-lg md:text-3xl font-bold tracking-tight">
                      Hey, I am Sankho,
                      <br />
                      <span className="font-semibold text-2xl text-[#253d30]/80">
                        Let me tell you a secret that helped me achieve all this.
                      </span>
                      <br />
                    </h3>

                    <h3 className="text-lg md:text-2xl font-semibold tracking-tight text-[#253d30]/80">
                      It comes from being able to track, measure and organise all the stats of my life.
                    </h3>

                    <div className="grid grid-1 md:grid-cols-2 gap-2">
                      {
                        cardInfo.map((info) => (
                          <div key={info.area} className="flex items-center justify-start gap-4 p-1">
                            {info.icon}
                            <p className="text-md font-semibold">{info.area}</p>
                          </div>
                        ))
                      }
                    </div>

                    <h3 className="text-lg md:text-2xl font-semibold md:tracking-tight text-[#253d30]/80">
                      I use <span className="text-[#253d30] font-bold">Notion</span> to do all this, it&apos;s an incredible tool but haunting to start from scratch. <br /> That&apos;s why <span className="font-bold text-[#253d30]">I&apos;ve made this collection of my favourite templates that quite literally run my life.</span>
                    </h3>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section id="templates" className="container mx-auto px-4 max-w-5xl space-y-14">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Discover All Premium Notion Templates</h2>
              <p className="text-lg text-muted-foreground">
                Enhance your Productivity with our Exclusive Notion Templates
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {templates.map((item) => (
                <Card className='max-w-lg flex flex-col justify-between' key={item.slug} >
                  <CardHeader className="space-y-4">
                    <Image
                      src={item.imageUrl}
                      alt={`Template ${item.title}`}
                      width={400}
                      height={300}
                      className="w-auto lg:h-64 object-contain"
                    />
                    <CardTitle className='w-full flex items-center justify-between text-xl font-bold'>
                      {item.title}
                      <span className="text-lg font-semibold">{item.price ? `${item.price}` : 'Free'}</span>
                    </CardTitle>
                    <CardDescription>
                      {item.shortDescription}
                    </CardDescription>
                  </CardHeader>

                  <CardFooter className="mt-auto gap-4">
                    <ReadMoreDialog template={item} />
                    <Link href={item.cta} className='w-full'>
                      <Button className="w-full bg-[#253d30] hover:bg-[#253d30]/90">View Template</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          <section id="reviews" className="py-12 container mx-auto px-4 space-y-14">
            <h2 className="text-3xl font-bold text-center mb-8">See What Our Protagonist Gang Says</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Alex', comment: 'Exactly what I was trying to do on my own but it was taking me hours, found this template and it&apos;s exactly the style I love. Nice work!' },
                { name: 'Sam', comment: 'It made my work significantly easier :)”' },
                { name: 'Jordan', comment: 'Everything I need in one place! This life planner template saved me alot of head ache trying to figure out notion. I am so glad I found this shop.' }
              ].map((review, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-2">&quot;{review.comment}&quot;</p>
                    <p className="font-semibold">- {review.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id='contact' className="w-full py-12 bg-black text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Productivity?</h2>
              <p className="mb-6">Get started with our Notion templates today and transform your workflow.</p>
              <Button size="lg" variant="secondary">Make Me a Protagonist</Button>
            </div>
          </section>

        </main>
      </div>
    </div>
  )
}