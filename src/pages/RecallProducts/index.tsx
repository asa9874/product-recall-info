import RecallProductsBody from './components/RecallProductsBody';
import ScrollToTopButton from './components/ScrollToTopButton';
import CollapseMenu from './components/CollapseMenu';

function RecallProducts() {
  return (
    <div className="bg-neutral-200 dark:bg-neutral-800">
      <CollapseMenu />
      <RecallProductsBody />
      <ScrollToTopButton />
    </div>
  );
}

export default RecallProducts;
