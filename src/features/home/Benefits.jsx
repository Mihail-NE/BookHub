import {
    BookOpenIcon,
    CreditCardIcon,
    PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/outline";

const Benefits = () => {
    const benefits = [
        {
            icon: (
                <BookOpenIcon className="w-16 h-16 text-violet-500 flex items-center" />
            ),
            title: "Большой выбор книг",
            description: "Тысячи книг на любой вкус",
        },
        {
            icon: (
                <CreditCardIcon className="w-16 h-16 text-violet-500 flex items-center" />
            ),
            title: "Удобная доставка",
            description: "Быстрая и надежная доставка по всему миру",
        },
        {
            icon: (
                <PhoneArrowDownLeftIcon className="w-16 h-16 text-violet-500 flex items-center" />
            ),
            title: "Поддержка 24/7",
            description: "Мы всегда готовы помочь вам",
        },
    ];

    return (
        <div className="bg-gray-50 py-16 px-6">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-gray-800  text-center mb-12 mobile:text-2xl">
                    Почему выбирают нас?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="text-center border p-8  rounded-lg shadow-xl cursor-pointer hover:border-spacing-10  hover:shadow-violet-200 transition-all duration-300"
                        >
                            <div className="text-4xl mb-4">
                                <div className="flex justify-center">
                                    {benefit.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Benefits;
