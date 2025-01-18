// import React, { useEffect, useState } from 'react';
// import { supabase } from '../../lib/supabase';
// import { Alert, View } from 'react-native';
// import { styles } from './styles';
// import { useStripe } from '@stripe/stripe-react-native';
// import { Button } from '@rneui/themed'

// export default function Payment() {
//     const { initPaymentSheet, presentPaymentSheet } = useStripe(); 
//     const [sucess, setSuccess] = useState<boolean>(false);

//     const confirmHandler = async (paymentMethod, shouldSavePaymentMethod, intentCreationCallback) => {
//         // Make a request to your own server.
//         const response = await fetch(`${API_URL}/create-intent`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//         }});
//         // Call the `intentCreationCallback` with your server response's client secret or error
//         const { client_secret, error } = await response.json();
//         if (client_secret) {
//           intentCreationCallback({clientSecret: client_secret});
//         } else {
//           intentCreationCallback({error});
//         }
//       }

//     const initializePaymentSheet = async () => {
//         const { error, paymentOption } = await initPaymentSheet({
//             merchantDisplayName: "Example, Inc.",
//             customFlow: true,
//             intentConfiguration: {
//                 mode: {
//                 amount: 1099,
//                 currencyCode: 'SGD',
//             },
//             confirmHandler: confirmHandler
//         }
//     });
//     if (error) {
//       // handle error
//     }
//     // Update your UI with paymentOption
//   };

//   const confirmHandler = async (paymentMethod, shouldSavePaymentMethod, intentCreationCallback) => {
//   };

//   const [publishableKey, setPublishableKey] = useState('');
  
//   const fetchPublishableKey = async () => {
//     // const key = await fetchKey(); // fetch key from your server here
//     // setPublishableKey(key);
//     };
    
//     useEffect(() => {
//     fetchPublishableKey();
//     }, []);
  
//   const openPaymentSheet = async () => {  
//     await initializePaymentSheet(); 
//     const { error } = await presentPaymentSheet();

//     if (error) {
//       Alert.alert(`Error code: ${error.code}`, error.message);
//     } else {
//       setSuccess(true);
//     }
//   };

//   return (
//       <Button
//         title="Purchase"
//         onPress={openPaymentSheet}
//         buttonStyle={styles.confirmButton}
//       />
//   );
// }
