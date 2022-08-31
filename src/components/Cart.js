import { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { CartContext } from "../contexts/CartContext";
import { CartItem } from "./CartItem";

export const Cart = () => {
  // eslint-disable-next-line spaced-comment
  const { open, setOpen, cart, editQuantity, deleteOfCart, cartTotal } =
    useContext(CartContext);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-xl">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Cerrar</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-screen flex-col bg-gray-300 py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="">
                        <div className="stats shadow  w-full p-2">
                          <h2 className="text-lg text-center align-middle font-bold text-primary">
                            CARRITO
                          </h2>
                        </div>
                      </Dialog.Title>
                    </div>
                    <div className="flex h-full flex-col overflow-y-scroll">
                      <div className="grid grid-cols-1 content-between gap-4 p-4 ">
                        <div className="mt-6 flex flex-col gap-2 px-4 sm:px-6 overflow-auto pb-24">
                          {cart.length > 0
                            ? cart.map((item) => {
                                if (item.product) {
                                  return (
                                    <CartItem
                                      key={item.product.id}
                                      item={item}
                                      deletOfCart={deleteOfCart}
                                      editQuantity={editQuantity}
                                    />
                                  );
                                }
                                return null;
                              })
                            : null}
                        </div>
                        <div className="absolute inset-x-0 bottom-4 px-5 ml-0 min-w-full">
                          <div className="stats shadow w-full">
                            <div className="stat place-items-center">
                              <div className="stat-title">Items</div>
                              <div className="stat-value text-gray-600">
                                {cart.length}
                              </div>
                            </div>

                            <div className="stat place-items-center">
                              <div className="stat-title">Total</div>
                              <div className="stat-value text-secondary">
                                $
                                {cartTotal().toLocaleString("es-IN", {
                                  minimumFractionDigits: 0
                                })}
                              </div>
                            </div>
                            <div className="stat place-items-center">
                              <div className="stat-title">Finalizar compra</div>
                              <div className="stat-value text-secondary ">
                                <button
                                  type="button"
                                  className="btn btn-secondary btn-block"
                                >
                                  Pagar
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Cart;
