const Testimonials = () => {
    const testimonials = [
        {
            name: "Анна Иванова",
            photo: "https://via.placeholder.com/150",
            text: "Отличный сервис! Быстрая доставка и огромный выбор книг.",
        },
        {
            name: "Иван Петров",
            photo: "https://via.placeholder.com/150",
            text: "Очень удобно и легко найти нужную книгу. Рекомендую!",
        },
    ];

    return (
        <div className="container mx-auto py-16">
            <h2 className="text-3xl font-bold text-center mb-8">
                Что говорят наши читатели
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md"
                    >
                        <div className="flex items-center mb-4">
                            <img
                                src={testimonial.photo}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <h3 className="text-xl font-semibold">
                                {testimonial.name}
                            </h3>
                        </div>
                        <p className="text-gray-600">{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
