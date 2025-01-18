import React from 'react';
import { Button, Input } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { supabase } from '../../lib/supabase';
import { userInfo } from 'os';

const RedeemButton = ({cost, id, orderId}: {cost: number, id: string, orderId: string}) => {
    const navigation = useNavigation();

    const handlePress = async () => {
        try {
            console.log(orderId)
            const {data, error} = await supabase.from('users')
            .select('points').eq('id', id).single()
    
            if (data?.points < cost) {
                console.log("NOT ENOUGH POINTS BROTHER")
            } else {
                const {error: updateError } = await supabase.from('users')
                .update({points: data?.points - cost })
                .eq('id', id)
            }
    
            navigation.navigate('Order', { orderId });
        } catch (error) {
            console.log(error)
        }

    };

    return (
        <Button
            title="Buy Voucher"
            onPress={handlePress}
            buttonStyle={styles.button}
        />
    );
};

export default RedeemButton;