interface ModalContentProps {
    onClose: () => void,
    selectedTree: TreeRecord
}

const ModalContent = ({selectedTree, onClose}: ModalContentProps) => {
  return (
      <div className="overflow-y-auto overflow-x-hidden fixed  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[99999] justify-center items-center w-full h-full max-h-full mx-auto">
        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow">
            {/* Modal header */}
            <div className="flex items-center gap-x-4 justify-between p-4 md:p-5 border-b rounded-t">
              <div className="flex flex-col gap-y-4">
                    <h3 className="text-xl font-semibold text-extra-dark ">
                        Ağaç Bilgileri - {selectedTree.title_tr} 
                    </h3>
                    <h3 className=" font-semibold text-extra-dark">
                        {2024 - parseInt(selectedTree.age)} Yılından beri..
                    </h3>
                    {selectedTree.socialCulturalText.length > 12 && (<p dangerouslySetInnerHTML={{__html: selectedTree.socialCulturalText}} className="text-sm text-slate-500" />)}
                    
              </div>
              <button type="button"  onClick={onClose} className="bg-transparent  rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                <svg className="w-3 h-3"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
              <div className="grid gap-4 mb-4 p-4 md:p-5 text-primary text-medium">
                <img src={`https://anitagac.istanbul/${selectedTree.image}`} alt="tree" className="w-full max-h-96 object-cover rounded-lg" />
                {selectedTree.text.length > 12 && <h2 className="" dangerouslySetInnerHTML={{__html: selectedTree.text}} />}
                <h2 className="">Ağaç Tipi: {selectedTree.typeName}</h2>
                <h2 className="">Yaşı: {selectedTree.age}</h2>
                <h2 className="">Ağaç Boyu: {selectedTree.size}mt.</h2>
                <h2 className="">{selectedTree.currentStatus}</h2>
                <h2 className="">Konumu: {selectedTree.address}, {selectedTree.street}, {selectedTree.neighborhood}, {selectedTree.district}</h2>
                <a href={`http://maps.apple.com/?q=${selectedTree.latitude},${selectedTree.longitude}`} className="bg-extra-dark text-dark underline px-3 py-2 inline-block text-2xl">Adres</a>
              </div>
            </div>
        </div>
      </div>
  )
}

export default ModalContent