import Nav from "../components/Nav";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";

const ServicesPage = () => {
  return (
    <div className="overflow-x-hidden">
      <MobileNav />
      <Nav />
      <div className="mt-20 mb-10 font-bold text-center italic text-lg sm:text-xl m-auto">
        <p className="bg-orange-200 inline-block px-2 py-1 rounded-md">Prices vary depending on size and traveling distance</p>
      </div>
      <div className="px-10  grid sm:grid-cols-2 lg:grid-cols-3 gap-8  bg-base text-darker">
        <div className="grid grid-rows-2 ">
          <div className="text-4xl font-bold self-end pb-4">TRIMMING</div>
          <div className="text-xl">
            Transforming landscapes one tree at a time, Tyler's professional
            tree removal service offers swift and safe solutions for any tree
            removal needs. With a focus on safety and environmental
            responsibility, minimal disruption to your surroundings will be
            ensured while delivering exceptional results. Trust Tyler to handle
            your tree removal needs with precision and care.
          </div>
          <div className="my-10">
            <p>_______________________________</p>
          
          </div>
        </div>
        <div className="grid grid-rows-2 ">
          <div className="text-4xl font-bold self-end pb-4">TREE TRAINING</div>
          <div className="text-xl">
            Tree Training is a way to direct your tree into a specific shape as it grows, using selective pruning techniques and limb positioning to achieve the desired result. Particularly useful for training young trees allowing them to grow to their full potential. 
          </div>
          <div className="my-10">
            <p>_______________________________</p>
          </div>
        </div>
        <div className="grid grid-rows-2">
          <div className="text-4xl font-bold self-end pb-4">REMOVAL</div>
          <div className="text-xl">
            Clearing the way for your vision to flourish, comprehensive tree and
            bush removal service offers expert solutions tailored to your
            landscape needs. From hazardous trees to overgrown shrubbery, trust
            us to transform your landscape with precision and care, leaving you
            with a clean canvas ready for new growth and possibilities.
          </div>
          <div className="my-10">
            <p>_______________________________</p>
          </div>
        </div>

        <div className="grid grid-rows-2">
          <div className="text-4xl font-bold self-end pb-4">STUMP GRINDING</div>
          <div className="text-xl">
            Eliminate the remnants of felled trees with this efficient stump
            grinding service, allowing you to reclaim valuable space in your
            landscape. Our skilled technicians ensure thorough removal, leaving
            no trace behind and enabling seamless lawn maintenance or
            landscaping projects. Say goodbye to tripping hazards and hello to a
            pristine outdoor environment with Tyler's stump grinding expertise.
          </div>
          <div className="my-10">
            <p>_______________________________</p>
          </div>
        </div>

        <div className="grid grid-rows-2">
          <div className="text-4xl font-bold self-end pb-4">CANOPY RAISES</div>
          <div className="text-xl">
            Elevate your outdoor space with the professional canopy raise
            service. Trim and shape tree canopies, allowing more sunlight to
            filter through and enhancing the aesthetic appeal of your landscape.
            Trust Tyler to elevate your landscape to new heights.
          </div>
          <div className="my-10">
            <p>_______________________________</p>
          </div>
        </div>

        <div className="grid grid-rows-2">
          <div className="text-4xl font-bold self-end pb-4">DEADWOOD</div>
          <div className="text-xl">
            Deadwood not only compromises the aesthetic appeal of your landscape
            but also poses significant safety risks. Professional technique and
            equipment are used to assess, prune, and safely remove deadwood,
            promoting the health and longevity of your trees while enhancing the
            safety of your property.
          </div>
          <div className="my-10">
            <p>_______________________________</p>
          </div>
        </div>

        <div className="grid grid-rows-2">
          <div className="text-4xl font-bold self-end pb-4">STORM DAMAGE</div>
          <div className="text-xl">
            Storms can wreak havoc on trees, leaving behind broken branches,
            uprooted trunks, and scattered debris. From emergency tree removal
            to strategic pruning and structural support, safety and efficiency
            is the highest priority to mitigate further risks and revitalize
            your outdoor space.{" "}
          </div>
          <div className="my-10">
            <p>_______________________________</p>
          </div>
        </div>

        <div className="grid grid-rows-2">
          <div className="text-4xl font-bold self-end pb-4">
            *LEAVE ALL SPECIAL*
          </div>
          <div className="text-xl">
            Every client is unique, with varying arboreal needs. Ask about this
            customized tree service to elevate your outdoor space and leave your
            trees healthier and your lanscape more beautiful.
          </div>
          <div className="my-10">
            <p>_______________________________</p>
          </div>
        </div>
      </div>

      <div className="mb-10 font-bold text-center italic text-lg sm:text-xl">
  <p className="bg-orange-200 inline-block px-2 py-1 rounded-md">
    Prices vary depending on size and traveling distance
  </p>
</div>


      {/* <div><button>READY TO CHAT?</button></div> */}

      <Footer />
    </div>
  );
};

export default ServicesPage;
