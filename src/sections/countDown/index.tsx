import { Typography } from "@/components/ui/Typography";

const CountDown = () => {
    return (
        <section className="py-10 bg-primary">
            <div className="px-4 sm:px-6 lg:px-8 max-w-[1028px] mx-auto grid grid-cols-3 text-white">
                <div className="text-center">
                    <Typography variant="SemiBold_H1" className="block">10+</Typography>
                    <Typography variant="Medium_H5" className="block">Experience</Typography>
                </div>
                <div className="text-center border-x">
                    <Typography variant="SemiBold_H1" className="block">480+</Typography>
                    <Typography variant="Medium_H5" className="block">Happy Clients</Typography>
                </div>
                <div className="text-center">
                    <Typography variant="SemiBold_H1" className="block">14+</Typography>
                    <Typography variant="Medium_H5" className="block">Awards</Typography>
                </div>
            </div>
        </section>
    );
};

export default CountDown;