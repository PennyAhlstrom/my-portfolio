type DemoPageProps = {
  params: {
    slug: string
  }
}

export default function DemoPage({ params }: DemoPageProps) {
  return <div>Demo: {params.slug}</div>
}