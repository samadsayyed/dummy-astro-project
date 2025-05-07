import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      date: 'JAN 9, 2025',
      category: 'FURNITURE, TABLE',
      title: 'The Secrets to a Living Room that Draws You In',
      description: 'Nunc ut sem ut ex sollicitudin commodo. Suspendisse non enim felis. Nam nec diam ultricies, malesuada',
      image: 'https://placehold.co/800x600'
    },
    {
      id: 2,
      date: 'JAN 9, 2025',
      category: 'FURNITURE, CHAIR',
      title: 'Modern Interior Design Trends',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
      image: 'https://placehold.co/800x600'
    },
    {
      id: 3,
      date: 'JAN 9, 2025',
      category: 'DECOR, LIGHTING',
      title: 'Essential Elements of Home Staging',
      description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
      image: 'https://placehold.co/800x600'
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#FFFBF2]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">OUR BLOG</h2>
        
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="relative group px-12"
        >
          {blogPosts.map((post) => (
            <SwiperSlide key={post.id}>
              <article className="bg-white shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white px-4 py-1 shadow-md">
                    <span className="text-sm font-medium">{post.date}</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <img
                      src="https://placehold.co/40x40"
                      alt="Author"
                      className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                    />
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-sm text-accent-dark font-medium mb-2">{post.category}</div>
                  <h3 className="text-xl font-semibold mb-4 hover:text-accent-dark transition-colors">{post.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {post.description}
                  </p>
                  <a
                    href="#"
                    className="inline-block text-sm font-medium text-accent-dark hover:text-accent transition-colors"
                  >
                    READ MORE
                  </a>
                </div>
              </article>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev !text-black hover:!text-accent transition-colors"></div>
          <div className="swiper-button-next !text-black hover:!text-accent transition-colors"></div>
        </Swiper>
      </div>
    </section>
  );
}