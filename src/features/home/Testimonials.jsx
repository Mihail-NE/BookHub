const Testimonials = () => {
    const testimonials = [
        {
            name: "Маргарита Егорова",
            photo: "/BookHub/assets/maria.jpg",
            text: "Отличный сервис! Быстрая доставка и огромный выбор книг.",
        },
        {
            name: "Иван Краснов",
            photo: "/BookHub/assets/ivan.jpg",
            text: "Очень удобно и легко найти нужную книгу. Рекомендую!",
        },
    ];

    return (
        <div className="container mx-auto py-16 px-6">
            <h2 className="text-3xl font-bold text-gray-800  text-center mb-12">
                Что говорят наши читатели
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-xl border border-gray-300 hover:border-violet-400 transition-all duration-300 cursor-pointer"
                    >
                        <div className="flex items-center mb-4">
                            <img
                                src={testimonial.photo}
                                alt={testimonial.name}
                                className="w-24 h-24 rounded-full mr-4"
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
