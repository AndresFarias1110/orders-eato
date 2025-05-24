import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useAppSelector } from '../../hooks/hooks';

interface PropsAppSelect {
    onSelectChange: any;
}

const animatedComponents = makeAnimated();

export function AppSelect({ onSelectChange }: PropsAppSelect) {
    const { productList } = useAppSelector(
        state => state.productState,
    );

    return (
        <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            onChange={onSelectChange}
            isMulti
            options={productList.map(p => ({ value: p.id, label: p.name }))}
        />
    );
}