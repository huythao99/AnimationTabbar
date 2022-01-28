import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

export default function ReactHookForm() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      age: '',
      company: '',
      priceMin: '',
      priceMax: '',
      acreageMin: '',
      acreageMax: '',
    },
  });
  const onSubmit = (data, e) => {
    console.log('submit');
    console.log(data, e);
  };

  return (
    <ScrollView style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'firstName bắt buộc',
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{width: '100%'}}>
            <Text>First Name</Text>
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            <Text>{errors.firstName?.message}</Text>
          </View>
        )}
        name="firstName"
      />
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'lastName bắt buộc',
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{width: '100%'}}>
            <Text>Last Name</Text>
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            <Text>{errors.lastName?.message}</Text>
          </View>
        )}
        name="lastName"
      />

      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Age bắt buộc',
          },
          min: {
            value: 18,
            message: '18 tuổi trở lên',
          },
          max: {
            value: 80,
            message: 'độ tuổi < 80',
          },
          pattern: {
            value: /^\d+$/,
            message: 'Nhập đúng định dạng',
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{width: '100%'}}>
            <Text>Age</Text>
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            <Text>{errors.age?.message}</Text>
          </View>
        )}
        name="age"
      />

      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'company bắt buộc',
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{width: '100%'}}>
            <Text>Company</Text>
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            <Text>{errors.company?.message}</Text>
          </View>
        )}
        name="company"
      />

      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'price min bắt buộc',
          },
          min: {
            value: 0,
            message: 'Số tiền > 0',
          },
          max: {
            value: 10000000000000,
            message: 'Số tiền < 10000000000000',
          },
          pattern: {
            value: /^\d+$/,
            message: 'Nhập đúng định dạng',
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{width: '100%'}}>
            <Text>Price min</Text>
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            <Text>{errors.priceMin?.message}</Text>
          </View>
        )}
        name="priceMin"
      />

      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'price max bắt buộc',
          },
          min: {
            value: 0,
            message: 'Số tiền > 0',
          },
          max: {
            value: 10000000000000,
            message: 'Số tiền < 10000000000000',
          },
          pattern: {
            value: /^\d+$/,
            message: 'Nhập đúng định dạng',
          },
          validate: value => {
            const minPrice = getValues('priceMin');
            return parseInt(value) > parseInt(minPrice) || 'Nhập đúng giới hạn';
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{width: '100%'}}>
            <Text>Price max</Text>
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            <Text>{errors.priceMax?.message}</Text>
          </View>
        )}
        name="priceMax"
      />

      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'acreage min bắt buộc',
          },
          min: {
            value: 0,
            message: 'Diện tích > 0',
          },
          max: {
            value: 1000,
            message: 'Diện tích < 1000',
          },
          pattern: {
            value: /^\d+$/,
            message: 'Nhập đúng định dạng',
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{width: '100%'}}>
            <Text>Acreage min</Text>
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            <Text>{errors.acreageMin?.message}</Text>
          </View>
        )}
        name="acreageMin"
      />

      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'acreage max bắt buộc',
          },
          min: {
            value: 0,
            message: 'Diện tích > 0',
          },
          max: {
            value: 1000,
            message: 'Diện tích < 1000',
          },
          pattern: {
            value: /^\d+$/,
            message: 'Nhập đúng định dạng',
          },
          validate: value => {
            const minAcreage = getValues('acreageMin');
            return (
              parseInt(value) > parseInt(minAcreage) || 'Nhập đúng giới hạn'
            );
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{width: '100%'}}>
            <Text>Acreage max</Text>
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            <Text>{errors.acreageMax?.message}</Text>
          </View>
        )}
        name="acreageMax"
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 20,
  },
  paragraph: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    marginVertical: 10,
  },
});
