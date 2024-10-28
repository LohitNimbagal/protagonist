'use client'

import { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from './ui/button';

const reviews = [
    {
        name: "Kanav Singh",
        initials: "KS",
        comment: "Really loved the template. It helped me to organize my life; before, it was all cluttered.",
        rating: 5
    },
    {
        name: "Sauman Raaj",
        initials: "SR",
        comment: "Ya, it is good. I use it daily nowadays.",
        rating: 5
    },
    {
        name: "Anirban Maity",
        initials: "AM",
        comment: "One thing I can say about the template is that it has helped me to focus better on my work and organize my day easily.",
        rating: 5
    },
    {
        name: "Pramooth",
        initials: "P",
        comment: "Certainly I'm someone focusing more on how to be productive rather than just being proactive. I have tried N no of things but wasn't able to figure out something that can really be added to the routine. Like I was working towards creating something that can put me on track but always lost in the path, but finally yours was that something I was constantly looking for. I'm slowly adapting to using it and I could see a bit more productivity in me which itself is a great deal for me. The reason I can't give 5 is so simple that I'm a newbie to the notion and using it to the maximum benefit. Hope I can figure it out in the time being. Basically thanks for making my life a bit better.",
        rating: 4
    },
    {
        name: "Shyam Bamrotiya",
        initials: "SB",
        comment: "I really liked it! It was well-organized, easy to use, visually appealing. It helped me get a better overview of my tasks, plan my week more effectively, and track my progress. Also helps with my finances.",
        rating: 4
    },
    {
        name: "Krishna Yadav",
        initials: "KY",
        comment: "I love the agency part as a freelancer managing a few clients.",
        rating: 4
    },
    {
        name: "Aravindan",
        initials: "A",
        comment: "It helped me plan my daily routine well. I was completely new to Notion and didn't understand most of it. Then I saw your YouTube video and purchased the Notion template. It is really an awesome template.",
        rating: 4
    },
    {
        name: "Shubham Khakha",
        initials: "SK",
        comment: "I liked it because it contains everything in one place, so I don't have to switch tabs or apps while navigating through various aspects of my life.",
        rating: 4
    },

    {
        name: "Shubhayu Majumdar",
        initials: "SM",
        comment: "Loved the template. I look forward to learning more about it and adding custom changes best for my use.",
        rating: 4
    },
    {
        name: "Mohit Maddala",
        initials: "MM",
        comment: "I've been loving the product and have been using it since the day I bought. It is a better purchase.",
        rating: 4
    }
];

export default function ReviewsSection() {

    const scrollContainer = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const scrollLeft = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollBy({
                left: -300,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollBy({
                left: 300,
                behavior: 'smooth',
            });
        }
    };

    const handleScroll = () => {
        if (scrollContainer.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
        }
    };

    useEffect(() => {
        if (scrollContainer.current) {
            scrollContainer.current.addEventListener('scroll', handleScroll);
            handleScroll(); // Initial check
        }
        return () => {
            if (scrollContainer.current) {
                scrollContainer.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <section id="reviews" className="w-full bg-gray-100 flex items-center justify-center py-12">
            <div className="container mx-auto px-4 space-y-14 max-w-7xl">
                <h2 className="text-3xl font-semibold text-center mb-8 font-poppins">See What Our Protagonist Gang Says</h2>
                <div className="relative">
                    {/* Left scroll button */}

                    {canScrollLeft && (
                        <Button
                            variant="icon"
                            onClick={scrollLeft}
                            className="absolute -left-12 top-1/2 transform -translate-y-1/2 hidden lg:block"
                        >
                            <ChevronLeft />
                        </Button>
                    )}

                    {/* Reviews Carousel */}
                    <div
                        ref={scrollContainer}
                        className="flex overflow-x-scroll space-x-4 pb-2 no-scrollbar"
                    >
                        {reviews.map((review, index) => (
                            <Card key={index} className="flex-shrink-0 w-80">
                                <CardContent className="pt-6">
                                    <div className="flex items-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-5 h-5 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                            />
                                        ))}
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 bg-gray-200 text-[#253d30] flex items-center justify-center rounded-full font-semibold">
                                            {review.initials}
                                        </div>
                                        <p className="ml-3 font-semibold text-[#253d30]">{review.name}</p>
                                    </div>
                                    <p className="text-gray-800 mb-2">
                                        &quot;{review.comment.length > 120 ? `${review.comment.substring(0, 100)}...` : review.comment}&quot;
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Right scroll button */}
                    {canScrollRight && (
                        <Button
                            onClick={scrollRight}
                            variant="icon"
                            className="absolute -right-12 top-1/2 transform -translate-y-1/2 hidden lg:block"
                        >
                            <ChevronRight />
                        </Button>
                    )}
                </div>
            </div>
        </section>
    );
}
